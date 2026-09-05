"""
MediCare Health System — Python Microservice Server Entry Point
"""
import http.server
import socketserver
import os

PORT = int(os.environ.get("PORT", 5000))
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class MediCareHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        if self.path == '/api/health':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(b'{"status":"online","system":"MediCare Clinical Network"}')
            return
        elif not os.path.exists(os.path.join(DIRECTORY, self.path.lstrip('/'))):
            self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), MediCareHTTPHandler) as httpd:
        print(f"🏥 MediCare Python Server serving at http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            httpd.shutdown()
