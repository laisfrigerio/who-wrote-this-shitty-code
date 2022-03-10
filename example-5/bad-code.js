function Message() {
    if (window.location.pathname === "/login") {
        if (window.location.search !== "") {
            const message = window.location.search;
            const ref = $(".c-login").find(".message");
            if (message === "?user=logout") {
                $(ref).html("<span class='ui success message'>Logout realizado com sucesso!</span>");
            } else if (message === "?user=expires") {
                $(ref).html("<span class='ui warning message'>Login expirado!</span>");
            } else if (message === "?user=forbidden") {
                $(ref).html("<span class='ui  negative message'>Usuário não tem permissão para acessar esta página!</span>");
            }
        }
    }
}
