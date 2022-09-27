<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $nome =$_POST['name'];
        $email = $_POST['email'];
        $mensagem = $_POST['descricao'];

        require 'vendor/autoload.php';

        $from = new SendGrid\Email(null, "cesar@celke.com.br");
        $subject = "Contato - Portifólio da Pâm";
        $to = new SendGrid\Email(null, "xxx@gmai.com");
        $content = new SendGrid\Content("text/html", "Olá Pâmela, <br><br> Nova Mensagem de contato<br><br>Nome:$nome<br>Email:$email<br> Mensagem = $descricao");
        $mail = new SendGrid\Mail($from, $subject, $to, $content);
        
        //Necessário inserir a chave
        $apiKey = 'SENDGRID_API_KEY';
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        echo "Mensagem enviada com sucesso!";
        ?>
    </body>
</html>










