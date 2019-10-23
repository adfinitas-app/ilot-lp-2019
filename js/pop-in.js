(function () {
    var description_pop_in = "#description_pop_in_";
    var intervalPopIn;

    for (var i = 1; i <= 3; i++) {
        $(description_pop_in + String(i)).click(function() {
            if (this.id == "description_pop_in_1") {
                $(".pad_left_pop_in").html("<br><span class='vert_code'>La prison est souvent facteur d'isolement voir d'exclusion de notre                    société.</span> Au sein de nos centres d'hébergement, nous accueillons les personnes                sortant de prison ou encore sous main de justice pour leur éviter la rue et la dérive sociale,                voire la récidive. Offrir un toit, un repas chaud, rompre la solitude en échangeant avec nos                équipes, tout cela constitue les premières bases de notre accueil.<br><br>                De plus, chaque personne accueillie est suivie par un travailleur social, qui devient son                référent tout au long se son parcours avec l'Îlot. Avec lui, elle élabore un projet                individualisé en abordant toutes les dimensions sociales nécessaires à la réinsertion (rétablir                les droits sociaux, retisser les liens familiaux, prendre en charge sa santé, etc.). Tout ce                parcours au sein de notre association se fait en valorisant la personne accompagnée afin de lui                permettre de prendre un nouveau départ et de devenir actrice de sa vie.                <br><br>");
                $(".title_pop_in").html("prenons la peine d'accueillir");
                $("#number_pop_in_don").html("6O");
                $("#number_pop_in_don_reduce").html("15€*");
                $("#description_pop_in_don").html("Permet de fournir un repas, midi et soir, pendant une semaine dans notre établissement d'urgence la Passerelle.<br>");
                $("#pop_in_div").css("background-image", "url(assets/pop_in_1.png)");
            }
            if (this.id == "description_pop_in_2") {
                $(".pad_left_pop_in").html("<br><span class='vert_code'>A l’Îlot, héberger se fait de multiples façons : </span>en urgence, que ce soit dans l’accueil de jour ou de nuit de notre établissement La Passerelle à Amiens, ou dans nos lits Haltes soin santé pour les personnes qui sont sans domicile fixe au sortir d’un séjour hospitalier et qui ont encore besoin de soins. Ou bien pour se réinsérer dans l’un de nos quatre Centres d’Hébergement et de Réinsertion Sociale (CHRS) en Île-de-France et à Amiens. Ou enfin en logement en ville dans des appartements que nous mettons à la disposition de certains de nos résidents lorsqu’ils ont retrouvé une certaine autonomie.<br><br>Tout cela constitue les Maisons d’Accueil de l’Îlot : ce sont de véritables lieux de vie qui favorisent la reconstruction de nos résidents. Nous les encourageons à s'impliquer dans la vie quotidienne de leur maison d'accueil et dans des activités extérieures, notamment culturelles et sportives. Et tout au long de son séjour à l’Îlot, chaque personne est suivie par un référent social qui assure la cohérence et la continuité de son processus de réinsertion, plus particulièrement sur l’accès au logement au sortir de l’Îlot, l’un des facteurs clés pour retrouver une place dans notre société.<br><br>");
                $(".title_pop_in").html("prenons la peine d'héberger");
                $("#number_pop_in_don").html("9O");
                $("#number_pop_in_don_reduce").html("23€*");
                $("#description_pop_in_don").html("Permet à une personne de bénéficier de deux jours d’accompagnement dans l’un de nos centres d’hébergement.<br>");
                $("#pop_in_div").css("background-image", "url(assets/pop_in_2.png)");
            }
            if (this.id == "description_pop_in_3") {
                $(".pad_left_pop_in").html("<br><span class='vert_code'>Reprendre confiance en soi, développer des savoir-faire concrets et des savoir-être en entreprise,</span> nos chantiers d’Insertion par l’Activité Économique (IAE) et notre formation Atelier Qualification-Insertion (AQI) permettent aux personnes sortant de prison ou encore sous main de justice de trouver une place sur le marché de l’emploi ou d’obtenir un diplôme reconnu par l’Etat.<br><br>Encadrées par un conseiller en insertion professionnelle, chacune d’entre elle bâtit son projet professionnel car l’un des facteurs de réussite de la réinsertion reste l’emploi. En fonction de leurs besoins, elles participent également à des ateliers collectifs complémentaires (remise à niveau des savoirs de base, informatique, gestion de budget personnel, aide à la recherche d'emploi, etc.).<br>En 2018, 40% des salariés en insertion dans nos Ateliers ont trouvé un emploi ou une formation à la suite de leur passage à l’Îlot. Et 48% des personnes qui ont suivies la formation Atelier Qualification - Insertion ont été embauchées à la suite de leur diplôme.<br><br>");
                $(".title_pop_in").html("prenons la peine d'accompagner vers l'emploi");
                $("#number_pop_in_don").html("17O");
                $("#number_pop_in_don_reduce").html("43€*");
                $("#description_pop_in_don").html("Permet à une personne de bénéficier d’une semaine d’accompagnement dans nos ateliers d’Insertion d’Amiens.<br>");
                $("#pop_in_div").css("background-image", "url(assets/pop_in_3.png)");
            }
            $("#pop_in").css("display", "block");
        });
    }

    $("#close_pop_in").click(function() {
        intervalPopIn = setInterval(changeOpacityPopIn, 50);
    });

    function changeOpacityPopIn() {
        var opacity = Number($("#pop_in").css("opacity"));

        if (opacity == 0) {
            clearInterval(intervalPopIn);
            $("#pop_in").css("display", "none");
            $("#pop_in").css("opacity", "1");
        } else {
            opacity -= 0.05;
            $("#pop_in").css("opacity", opacity);
        }
    }
})();