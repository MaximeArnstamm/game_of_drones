jQuery(function($, undefined) {
    $('#term_demo').terminal(function(command, term) {
      if (command === 'heure') {
        
        term.echo("heure mise à jour")
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
