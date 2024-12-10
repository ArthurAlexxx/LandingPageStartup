import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCaPUDsMEowM-mfOyaQa33LEnocTksxBA",
    authDomain: "whitelabel-b16ff.firebaseapp.com",
    projectId: "whitelabel-b16ff",
    storageBucket: "whitelabel-b16ff.appspot.com",
    messagingSenderId: "984066920269",
    appId: "1:984066920269:web:e59a8626406b91e630b104"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Função para atualizar a exibição dos botões de login e logout
function updateAuthUI(user) {
    if (user) {
        // Se o usuário estiver logado
        document.getElementById('loginButton').style.display = 'none'; // Esconde o botão de login
        document.getElementById('BtnCadastro').style.display = 'none'; // Esconde o botão de cadastro
        document.getElementById('logoutButton').style.display = 'inline-block'; // Exibe o botão de logout
    } else {
        // Se o usuário não estiver logado
        document.getElementById('loginButton').style.display = 'inline-block'; // Exibe o botão de login
        document.getElementById('BtnCadastro').style.display = 'inline-block'; // Exibe o botão de cadastro
        document.getElementById('logoutButton').style.display = 'none'; // Esconde o botão de logout
    }
}

// Verificar o estado de autenticação sempre que a página for carregada
onAuthStateChanged(auth, user => {
    updateAuthUI(user);
});

// Função para fazer logout
document.getElementById('logoutButton')?.addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.href = "/TelasLanding/index.html"; // Redireciona para a página principal após logout
    } catch (error) {
        console.error("Erro ao fazer logout:", error);
    }
});
