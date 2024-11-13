from http.server import HTTPServer, SimpleHTTPRequestHandler
import webbrowser
import os

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print("Server started at http://localhost:8000")
    webbrowser.open('http://localhost:8000')
    httpd.serve_forever()

if __name__ == '__main__':
    # Change to the root directory of the project
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    run_server()
