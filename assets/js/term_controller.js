jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command, term) {
      if (command === 'texte') {
        term.echo("texte formatté \n a la ligne <br/> a la ligne html")
      }
      else if (command !== '') {
        term.echo(command);
      }
    },
  {
    greetings: 'greetings\n',
    name: 'js_demo',
    height: 300,
    width: 'auto' ,
    prompt: '> ',
    enabled: 'false'
  });
});
