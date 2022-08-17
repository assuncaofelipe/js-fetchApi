const uri= "https://api-ru-alunos-icet.herokuapp.com/alunos/";
const authHeader = "...";

function downApk() {
    const options = {
        headers: {
            Authorization: authHeader,
        },
    };

    fetch(uri)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            // the filename you want
            a.download = "positivo-apk";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            alert("Apk baixado"); // or you know, something with better UX...
        }).catch(() => alert("Bronca!"));    
}

