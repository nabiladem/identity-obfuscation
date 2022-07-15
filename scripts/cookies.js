document.getElementById('id_button_export').onclick = () => {
    chrome.cookies.getAll(getDetails('getAll'), ((cookies) => {
      let text ='Number of cookies=' + cookies.length + '\n';
      for (let cookie of cookies) {
        text += 'domain=' + cookie.domain + ',path=' + cookie.path + ',name=' + cookie.name + ',value=' + cookie.value + '\n';
      }
      document.getElementById('id_text').value = text;
    }));
  }
  
  function getDetails(kind){
    let domain = document.getElementById('id_domain').value;
    let details = {};
  
    switch(kind){
    case 'getAll':
      if (domain != ''){
        details['domain'] = domain;
      }
      if (name != ''){
        details['name'] = name;
      }
      break;
    }
    return details;
  }
