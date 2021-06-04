from fastapi import FastAPI, WebSocket,Request

# Create application
app = FastAPI(title='WebSocket Example')





@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    print('Accepting client connection...')
    await websocket.accept()
    while True:
        try:
            # Wait for any message from the client
            data=await websocket.receive_text()
            print(data)
            # Send message to the client

            await websocket.send_text("resp")
            print("Sending")
            # print(data)
        except Exception as e:
            print('error:', e)
            break
    print('Bye..')

# @app.post("/")
# async def read_root(request:Request):
#     print(request.json())
#     return 200

