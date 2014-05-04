<html>
    <head>Dummy Identity Verification</head>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('input[name="success"]').click(function() {
                console.log('Triggering verificationSuccess');

                window.top.$(window.top.document).trigger('verificationSuccess');
            });


            $('input[name="error"]').click(function() {
                console.log('Triggering verificationError');

                window.top.$(window.top.document).trigger('verificationError');
            });
        });
    </script>
    <body>
        <h1>Posted Data:</h1>
        <pre>
            <?php var_dump($_POST); ?>
        </pre>
        <input type="button" name="success" value="Click to trigger success" />
        <br />
        <input type="button" name="error" value="Click to trigger error" />
    </body>
</html>