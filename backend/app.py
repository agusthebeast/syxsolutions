from flask import Flask, request, jsonify
from flask_cors import CORS
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Servidor Flask funcionando correctamente."

# Función para enviar correos con SendGrid
def send_email(name, email, message):
    try:
        mail = Mail(
            from_email='generalsyx@gmail.com',  # Cambia esto al correo remitente verificado
            to_emails='generalsyx@gmail.com',  # Cambia esto al correo de destino
            subject=f'Nuevo mensaje de {name}',
            html_content=f"""
                <h3>Nuevo mensaje de contacto</h3>
                <p><strong>Nombre:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Mensaje:</strong><br>{message}</p>
            """
        )
        sg = SendGridAPIClient('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')  # Reemplaza con tu API Key
        response = sg.send(mail)
        print(f"Correo enviado, código de estado: {response.status_code}")
        return True
    except Exception as e:
        print(f"Error al enviar el correo: {e}")
        return False

@app.route('/send_message', methods=['POST'])
def send_message():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    if send_email(name, email, message):
        return jsonify({"success": True, "message": "Mensaje enviado con éxito."})
    else:
        return jsonify({"success": False, "message": "Hubo un error al enviar el mensaje."}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5501)

