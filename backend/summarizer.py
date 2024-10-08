from transformers import pipeline

summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
text_generator = pipeline("text-generation", model="gpt2")

def summarize_email(email_content):
    summary = summarizer(email_content, max_length=100, min_length=30, do_sample=False)
    return summary[0]['summary_text']

def generate_suggested_replies(summary):
    prompt = f"Based on this email summary: '{summary}', generate a short reply:"
    replies = []
    for _ in range(3):
        reply = text_generator(prompt, max_length=150, num_return_sequences=1)[0]['generated_text']
        reply = reply.replace(prompt, '').strip()
        replies.append(reply)
    return replies