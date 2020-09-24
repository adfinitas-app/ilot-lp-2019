(function () {
    var description_pop_in = "#description_pop_in_";
    var intervalPopIn;

    for (var i = 1; i <= 3; i++) {
        $(description_pop_in + String(i)).click(function () {
            if (this.id == "description_pop_in_1") {
                $(".pad_left_pop_in").html("<div style='padding-top: 6px'></div><span class='vert_code'>La prison est souvent facteur d'isolement voire d'exclusion de notre                    société.</span> Au sein de nos centres d'hébergement, nous accueillons les personnes                sortant de prison ou encore sous main de justice pour leur éviter la rue et la dérive sociale,                voire la récidive. Offrir un toit, un repas chaud, rompre la solitude en échangeant avec nos                équipes, tout cela constitue les premières bases de notre accueil.<div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>                De plus, <b>chaque personne accueillie est suivie par un travailleur social,</b> qui devient son                référent tout au long de son parcours avec l'Îlot. Avec lui, elle élabore un projet                individualisé en abordant toutes les dimensions sociales nécessaires à la réinsertion (rétablir                les droits sociaux, retisser les liens familiaux, prendre en charge sa santé, etc.). Tout ce                parcours au sein de notre association se fait en valorisant la personne accompagnée afin de lui                permettre de <b>prendre un nouveau départ et de devenir actrice de sa vie.</b>               <div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>");
                $(".title_pop_in").html("prenons la peine d'accueillir");
                $("#number_pop_in_don").html("6O");
                $("#number_pop_in_don_reduce").html("15€*");
                $("#description_pop_in_don").html("Permet de fournir un repas, midi et soir, pendant une semaine dans notre établissement d'urgence la Passerelle.<div style='padding-top: 6px'></div>");
                $("#pop_in_div").css("background-image", "url(assets/pop_in_1.png)");
                $("#div_change_bg_pop_in").css("background-color", "rgba(255, 255, 255, 0.95)");
                $("#link_don_pop-in").attr("href", "https://donner.ilot.asso.fr/b?cid=4&amount=6000&frequency=once&utm_medium=web&utm_source=landingpage&utm_campaign=fa2019&utm_content=accueillir");
            }
            if (this.id == "description_pop_in_2") {
                $(".pad_left_pop_in").html("<div style='padding-top: 6px'></div><span class='vert_code'>A l’Îlot, héberger se fait de multiples façons : </span>en urgence, que ce soit dans l’accueil de jour ou de nuit de notre établissement la Passerelle à Amiens, ou dans nos lits Halte Soins Santé pour les personnes qui sont sans domicile fixe au sortir d’un séjour hospitalier et qui ont encore besoin de soins. Ou bien pour se réinsérer dans l’un de nos quatre Centres d’Hébergement et de Réinsertion sociale (CHRS) en Île-de-France et à Amiens. Ou enfin en logement en ville dans des appartements que nous mettons à la disposition de certains de nos résidents lorsqu’ils ont retrouvé une relative autonomie.<div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>Tout cela constitue les Maisons d’Accueil de l’Îlot : <b>ce sont de véritables lieux de vie qui favorisent la reconstruction</b> de nos résidents. Nous les encourageons à s'impliquer dans la vie quotidienne de leur maison d'accueil et dans des activités extérieures, notamment culturelles et sportives. Tout au long de son séjour à l’Îlot, <b>chaque personne est suivie par un référent social</b> qui assure la cohérence et la continuité de son processus de réinsertion, plus particulièrement sur l’accès au logement au sortir de l’Îlot, l’un des facteurs clés pour retrouver une place dans notre société.<div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>");
                $(".title_pop_in").html("prenons la peine d'héberger");
                $("#number_pop_in_don").html("9O");
                $("#number_pop_in_don_reduce").html("23€*");
                $("#description_pop_in_don").html("Permet à une personne de bénéficier de deux jours d’accompagnement dans l’un de nos centres d’hébergement.<div style='padding-top: 6px'></div>");
                $("#pop_in_div").css("background-image", "url(assets/pop_in_3.png)");
                $("#div_change_bg_pop_in").css("background-color", "rgba(255, 255, 255, 0.95)");
                $("#link_don_pop-in").attr("href", "https://donner.ilot.asso.fr/b?cid=4&amount=9000&frequency=once&utm_medium=web&utm_source=landingpage&utm_campaign=fa2019&utm_content=heberger");
            }
            if (this.id == "description_pop_in_3") {
                $(".pad_left_pop_in").html("<div style='padding-top: 6px'></div><span class='vert_code'>Reprendre confiance en soi, développer des savoir-faire concrets et des savoir-être en entreprise,</span> nos chantiers d’Insertion par l’Activité Économique (IAE) et notre formation Atelier Qualification-Insertion (AQI) permettent aux personnes sortant de prison ou encore sous main de justice de <b>trouver une place sur le marché de l’emploi ou d’obtenir un diplôme reconnu par l’Etat.</b><div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>Encadrées par un conseiller en insertion professionnelle, chacune d’entre elles <b>bâtit son projet professionnel</b> car l’un des facteurs de réussite de la réinsertion reste l’emploi. En fonction de leurs besoins, elles participent également à des ateliers collectifs complémentaires (remise à niveau des savoirs de base, informatique, gestion de budget personnel, aide à la recherche d'emploi, etc.).<div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>En 2019, <b>38% des salariés en insertion</b> dans nos Ateliers ont trouvé un emploi ou une formation à la suite de leur passage à l’Îlot et <b>44% des personnes</b> qui ont suivi la formation Atelier Qualification - Insertion ont été embauchées à la suite de leur diplôme.<div style='padding-top: 6px'></div><div style='padding-top: 6px'></div>");
                $(".title_pop_in").html("prenons la peine d'accompagner vers l'emploi");
                $("#number_pop_in_don").html("17O");
                $("#number_pop_in_don_reduce").html("43€*");
                $("#description_pop_in_don").html("Permet à une personne de bénéficier d’une semaine d’accompagnement dans nos Ateliers d’Insertion d’Amiens.<div style='padding-top: 6px'></div>");
                $("#pop_in_div").css({
                    backgroundImage: "url(assets/pop_in_2.png)",
                    backgroundPosition: "0 -40px"
                });
                $("#div_change_bg_pop_in").css("background-color", "rgba(255, 255, 255, 0.95)");
                $("#link_don_pop-in").attr("href", "https://donner.ilot.asso.fr/b?cid=4&amount=17000&frequency=once&utm_medium=web&utm_source=landingpage&utm_campaign=fa2019&utm_content=emploi");
            }
            $("#pop_in").css("display", "block");
            if ($(window).width() > 768) {
                document.documentElement.style.overflow = 'hidden';
            }
        });
    }

    $("#close_pop_in").click(function () {
        intervalPopIn = setInterval(changeOpacityPopIn, 50);
    });

    function changeOpacityPopIn() {
        var opacity = Number($("#pop_in").css("opacity"));

        if (opacity <= 0) {
            $("#pop_in").css("display", "none");
            $("#pop_in").css("opacity", "1");
            if ($(window).width() > 768) {
                document.documentElement.style.overflow = 'visible';
            }
            clearInterval(intervalPopIn);
        } else {
            opacity -= 0.05;
            $("#pop_in").css("opacity", opacity);
        }
    }
    $("#pop_in_div").scroll(function(){
        $("#close_pop_in").css({"top": ($("#pop_in_div").scrollTop()) + 15 + "px"});
      });
})();
