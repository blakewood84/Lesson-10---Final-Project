let gitHubRepoRequest = new XMLHttpRequest();

gitHubRepoRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
        {
            let gitObj = JSON.parse(this.responseText);
            
            for (var i = 0; i<gitObj.length; i++)
            {
                document.getElementById("gitRepos").innerHTML +='<li>'+gitObj[i].html_url+"</a></li>";        
            }
        }
}
gitHubRepoRequest.open("GET", "https://api.github.com/users/blakewood84/repos", true);
gitHubRepoRequest.send();