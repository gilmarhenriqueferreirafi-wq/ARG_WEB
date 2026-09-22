import http.server
import socketserver
import webbrowser
import os
import socket
import qrcode

PORTA = 8000
PASTA = os.path.dirname(os.path.abspath(__file__))

os.chdir(PASTA)


def obter_ip():
    """Descobre o IP local do computador."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()

    return ip


ip = obter_ip()
endereco = f"http://{ip}:{PORTA}/index.html"


class MeuServidor(http.server.SimpleHTTPRequestHandler):
    pass


# Permite conexões de outros dispositivos da rede
with socketserver.TCPServer(("0.0.0.0", PORTA), MeuServidor) as servidor:

    print()
    print("=" * 60)
    print("              SERVIDOR LOCAL")
    print("=" * 60)
    print()
    print(f" Pasta:     {PASTA}")
    print(f" PC:        http://localhost:{PORTA}/index.html")
    print(f" Celular:   {endereco}")
    print()
    print("-" * 60)
    print("              ESCANEIE O QR CODE")
    print("-" * 60)
    print()

    # Gera QR Code
    qr = qrcode.QRCode(
        version=1,
        box_size=1,
        border=1
    )

    qr.add_data(endereco)
    qr.make(fit=True)

    # Imprime o QR Code diretamente no CMD
    qr.print_ascii(invert=True)

    print()
    print("-" * 60)
    print(" Deixe esta janela aberta enquanto estiver usando o site.")
    print(" Pressione CTRL+C para desligar.")
    print("-" * 60)
    print()

    # Abre no navegador do computador
    webbrowser.open(endereco)

    servidor.serve_forever()