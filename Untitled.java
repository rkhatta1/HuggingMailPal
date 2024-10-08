from flask import Flask, request, jsonify
from summarizer import summarize_email, generate_suggested_replies
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/summarize', methods=['POST'])
def summarize():
    email_content = request.json['content']
    summary = summarize_email(email_content)
    suggested_replies = generate_suggested_replies(summary)
    return jsonify({
        'summary': summary,
        'suggested_replies': suggested_replies
    })

if __name__ == '__main__':
    app.run(debug=True)