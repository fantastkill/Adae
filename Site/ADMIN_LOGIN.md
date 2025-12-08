# Login de Administrador

## Como ativar o modo Admin

Para ativar o botão "Sair" no menu de navegação, você precisa definir o status de admin no localStorage do navegador.

### Método 1: Console do Navegador

1. Abra o site no navegador
2. Pressione `F12` para abrir o DevTools
3. Vá para a aba "Console"
4. Digite o seguinte comando:

```javascript
localStorage.setItem('isAdmin', 'true');
```

5. Recarregue a página (`F5`)
6. O botão "Sair" aparecerá no menu

### Método 2: Criar página de login

Você pode criar uma página de login separada que define o localStorage após autenticação bem-sucedida.

### Para deslogar

Clique no botão "Sair" no menu ou execute no console:

```javascript
localStorage.removeItem('isAdmin');
```

## Nota

Este é um exemplo básico. Em produção, você deve implementar:
- Autenticação real com backend
- Tokens JWT
- Proteção de rotas
- Sessões seguras
