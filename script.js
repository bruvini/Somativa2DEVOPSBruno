document.getElementById('messageButton').addEventListener('click', function() {
    const messages = [
        "Mantenha a positividade!",
        "Você está fazendo um ótimo trabalho!",
        "Continue assim!",
        "A persistência é o caminho do êxito.",
        "Ser ou não ser, eis a questão",
        "Vivendo e aprendendo",
        "Nem tudo que reluz é ouro!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});
