document.addEventListener('DOMContentLoaded', function () {
    var scriptTag = document.currentScript;
    var projectId = scriptTag.getAttribute('id');

    var chatButton = document.createElement('button');
    chatButton.textContent = 'Chat';
    chatButton.style.position = 'fixed';
    chatButton.style.bottom = '20px';
    chatButton.style.right = '20px';

    var chatIframe = document.createElement('iframe');
    chatIframe.src = 'https://knowledge.toool.ai/chat/' + projectId;
    chatIframe.style.display = 'none';
    chatIframe.style.position = 'fixed';
    chatIframe.style.bottom = '0';
    chatIframe.style.right = '0';
    chatIframe.style.width = '400px';
    chatIframe.style.height = '600px';
    chatIframe.style.border = '0';

    chatButton.addEventListener('click', function () {
        if (chatIframe.style.display === 'none') {
            chatIframe.style.display = 'block';
        } else {
            chatIframe.style.display = 'none';
        }
    });
    document.body.appendChild(chatButton);
    document.body.appendChild(chatIframe);
});