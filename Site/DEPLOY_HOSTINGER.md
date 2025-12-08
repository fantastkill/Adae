# 🚀 Guia de Deploy - Hostinger

## ✅ Checklist Pré-Deploy

- [x] Arquivo `.htaccess` criado (para SPA React)
- [x] Build de produção configurado
- [x] Dependências instaladas

## 📦 Passo 1: Gerar Build de Produção

Execute o comando para criar a versão otimizada do site:

```bash
npm run build
```

Isso criará uma pasta `build/` com todos os arquivos otimizados e prontos para produção.

## 📤 Passo 2: Enviar para Hostinger

### Opção A: Via File Manager (Recomendado para iniciantes)

1. **Acesse o painel da Hostinger**
   - Faça login no hPanel
   - Vá em **Gerenciador de Arquivos**

2. **Navegue até a pasta do domínio**
   - Acesse `public_html` (ou a pasta do seu domínio/subdomínio)

3. **Limpe a pasta (se houver arquivos antigos)**
   - Selecione todos os arquivos e exclua (ou faça backup antes)

4. **Faça upload dos arquivos da pasta `build/`**
   - Selecione TODOS os arquivos da pasta `build/` do seu projeto
   - Faça upload para `public_html`
   - **Importante**: Envie os arquivos, não a pasta `build` em si

### Opção B: Via FTP

1. **Configure o cliente FTP** (FileZilla, WinSCP, etc.)
   - Host: `ftp.seusite.com` ou IP fornecido pela Hostinger
   - Usuário: Seu usuário FTP
   - Senha: Sua senha FTP
   - Porta: 21 (ou 22 para SFTP)

2. **Conecte e navegue até `public_html`**

3. **Envie todos os arquivos da pasta `build/`**
   - Arraste os arquivos da pasta `build/` local para `public_html` no servidor

## ⚙️ Passo 3: Verificar Configurações

### Verificar se o `.htaccess` foi enviado

Certifique-se de que o arquivo `.htaccess` está na raiz do `public_html`. Ele é necessário para:
- Redirecionar todas as rotas para `index.html` (SPA)
- Garantir que o React Router funcione corretamente

### Estrutura Final no Servidor

```
public_html/
├── .htaccess          ← Deve estar aqui!
├── index.html
├── static/
│   ├── css/
│   ├── js/
│   └── media/
└── ... (outros arquivos gerados)
```

## 🔍 Passo 4: Testar o Site

1. Acesse seu domínio no navegador
2. Verifique se todas as páginas carregam corretamente
3. Teste a navegação e funcionalidades
4. Verifique no mobile (responsividade)

## 🐛 Solução de Problemas

### Site não carrega / Erro 404

- Verifique se o `.htaccess` está na raiz do `public_html`
- Confirme que todos os arquivos da pasta `build/` foram enviados
- Verifique as permissões dos arquivos (644 para arquivos, 755 para pastas)

### Rotas não funcionam

- Confirme que o `.htaccess` está presente e correto
- Verifique se o servidor suporta mod_rewrite (Hostinger geralmente suporta)

### CSS/JS não carregam

- Verifique se a pasta `static/` foi enviada completamente
- Confirme os caminhos dos arquivos no navegador (F12 > Network)

## 📝 Notas Importantes

- **Sempre faça backup** antes de fazer deploy
- Após atualizações, execute `npm run build` novamente e reenvie os arquivos
- O build otimiza e minifica automaticamente os arquivos
- A pasta `build/` pode ser deletada localmente após o upload (mas é bom manter para referência)

## 🔄 Atualizações Futuras

Para atualizar o site:

1. Faça as alterações no código
2. Execute `npm run build`
3. Envie novamente os arquivos da pasta `build/` para `public_html`
4. Limpe o cache do navegador (Ctrl+F5) para ver as mudanças

---

**Pronto! Seu site está configurado para hospedagem na Hostinger! 🎉**

