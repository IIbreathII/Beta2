from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
from dotenv import load_dotenv
import os
import json
app = Flask(__name__)

# Разрешаем CORS
CORS(app)

# Загружаем секрет
load_dotenv()

db_password = os.getenv('DB_API')

client = OpenAI(api_key=db_password)


@app.route('/TestInfo', methods=['GET'])
def get_ai_data():
    try:
        # Открываем файл db.json и читаем его содержимое
        with open('db.json', 'r') as f:
            data = json.load(f)  # Преобразуем JSON в Python-объект
        
        # Проверяем, является ли data объектом, и если да, оборачиваем его в массив
        if isinstance(data, dict):
            data = [data]  # Если это объект, оборачиваем его в массив

        # Отправляем данные как JSON-ответ
        response = jsonify(data)

        # Очищаем файл db.json после отправки данных
        

        return response

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/server/angles', methods=['POST'])
def ai_data():
    try:
        # Чтение содержимого analys.json
        with open("analys.json", "r") as file:
            analys_data = json.load(file)
        
        # Преобразуем данные в строку для использования в запросе
        user_message = json.dumps(analys_data, ensure_ascii=False, indent=4)
        ask = f"Запиши в формате json файла: {user_message}"

        # Проверяем, есть ли содержимое
        if not user_message:
            return jsonify({"error": "analys.json is empty"}), 400

        # Отправка запроса к OpenAI API
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": ask}],
            model="gpt-4-turbo"
        )

        ai_response = response.choices[0].message.content.strip()

        # Проверяем, является ли ответ корректным JSON
        try:
            json_response = json.loads(ai_response)
        except json.JSONDecodeError:
            json_response = {"response": ai_response}

        # Сохраняем ответ в JSON-файл
        with open("ai_response.json", "w") as file:
            json.dump(json_response, file, indent=4)

        return jsonify(json_response)
    except FileNotFoundError:
        return jsonify({"error": "analys.json file not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500



        


# Эндпоинт для загрузки данных (POST-запрос)
@app.route('/uploadTestinfo', methods=['POST'])
def upload_json():
    try:
        # Получаем данные из тела запроса
        data = request.get_json()
        
        # Проверяем, если данные есть
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        # Открываем файл и записываем данные
        with open('db.json', 'w') as f:
            json.dump(data, f, indent=4)  # Записываем данные в JSON формат
        
        # Возвращаем успешный ответ
        return jsonify({"message": "Data successfully written to file", "data": data}), 200
    
    except Exception as e:
        # Возвращаем ошибку в случае исключения
        return jsonify({"error": str(e)}), 500

    
#------------------------------------------------------------------------


@app.route('/server/ai', methods=['POST'])
def ai_data():
    data = request.json
    user_message = data.get("message", "")
    ask = f"Я буду давать тебе текст, c начало проверь его на плагиат, попробуй найти источник откуда он был взят, если проверка на плагиат прошла успешно то ты должен оценить текст от 0 до 100, сам текст:{user_message}, если не можешь оценить текст оцени его на оценку 0, если он имеет набор слов но он не савязани логически или имеет какие либо проблемы, оцени его оценкой 0, если текст похож на написаный человек напиши 0, остальная оценка зависит от схожости написаного текста, с патернами которые ты используешь для написания текста, также проверь сущиствует ли этот текс в интернете если да, то оцени его в 0,  в конце анализа напиши только оценку от 0 до 100"

    if not user_message:
        return jsonify({"error": "Message is required"}), 

    try:
        # Отправляем запрос к OpenAI API
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": ask}],
            model="gpt-4-turbo"  
        )
        # Извлекаем ответ
        ai_response = response.choices[0].message.content
        return jsonify({"response": ai_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
