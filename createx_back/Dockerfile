# importa din docker hub imaginea tip python versiunea indicata
FROM python:3.9-slim 
# environement, un fel de variante
# flask app indica ca aplicatia este main.py, flask run indica ca aplicatia ruleaza pe orice adresa IP, flask run indicam ca aplicatia ruleaza pe portul 5103.
ENV FLASK_APP=main.py \
    FLASK_RUN_HOST=0.0.0.0 \
    FLASK_RUN_PORT=5103 \
    FLASK_ENV=development

WORKDIR /app
# copie fisierul cu biblioteci care trebuie importate pe container.
COPY requirements.txt requirements.txt
# instaleaza bibliotecile
RUN pip install --no-cache-dir -r requirements.txt
# copie tot proiectul in container
COPY . .
# ca aplicatia a ruleze in exterior pe portul indicat 
EXPOSE 5103
# ruleaza aplicatia
CMD ["flask", "run", "--host", "0.0.0.0"]