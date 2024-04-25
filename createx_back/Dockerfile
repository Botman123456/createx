FROM python:3.9-slim

ENV FLASK_APP=main.py \
    FLASK_RUN_HOST=0.0.0.0 \
    FLASK_RUN_PORT=5103 \
    FLASK_ENV=development

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5103

CMD ["flask", "run", "--host", "0.0.0.0"]