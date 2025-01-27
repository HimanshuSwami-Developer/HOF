from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()

    # Extract form data from request
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # Validate input
    if not name or not email or not message:
        return jsonify({"success": False, "message": "All fields are required"}), 400

    # Gmail credentials
    sender_email = "Himanshuswami2810@gmail.com"  # Your Gmail address
    app_password = "ghvhdcxoazntakfn"  # Your app password
    receiver_email = "Himanshuswami2810@gmail.com"  # Recipient's email

    # Email content
    subject = f"New message from {name}"
    body = f"""
    You have received a new message from your contact form.

    Name: {name}
    Email: {email}

    Message:
    {message}
    """

    # Set up the email
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = receiver_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        # Connect to Gmail's SMTP server
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()  # Secure the connection
            server.login(sender_email, app_password)  # Log in to your email
            server.sendmail(sender_email, receiver_email, msg.as_string())  # Send the email

        return jsonify({"success": True, "message": "Email sent successfully!"}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"success": False, "message": "Failed to send email."}), 500


if __name__ == "__main__":
    app.run(port=3010, debug=False)
