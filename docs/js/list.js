(function () {
    "use strict";

    $(document).ready(function () {
        var all_games = [
            { category: 'Classic Games',
               games: [
                { name: 'Connect 4', photo: 'Connect4.jpg' },
                { name: 'Mancala', photo: 'Mancala.jpg', },
                { name: 'Star Wars Operation: Silly Skill Game', photo: 'StarWarsOperation.jpg' },
                { name: 'Transformers Monopoly: Collector\'s Edition', photo: 'TransformersMonopoly.jpg', },
                { name: '3 in 1 Game Set - Chinese Checkers, Chess, Checkers', photo: '3in1.jpg', },
               ], },
            { category: 'Geeky Games',
               games: [
                { name: 'Blokus', photo: 'Blokus.jpg', uri: 'https://boardgamegeek.com/boardgame/2453/blokus' },
                { name: 'Dominion', photo: 'Dominion.jpg', uri: 'https://boardgamegeek.com/boardgame/36218/dominion' },
                { name: 'Ingenious', photo: 'Ingenious.jpg', uri: 'https://boardgamegeek.com/boardgame/9674/ingenious' },
               ], },
        ];

        var list_html = $('#game_list');
        var category_length = all_games.length;

        for (var i = 0; i < category_length; i++) {
            var category = all_games[i];
            list_html.append(
                '<div class="row">' +
                    '<div class="col-md-6 col-md-offset-1">' +
                        '<h2 class="text-center">' + category.category + '</h2>' +
                    '</div>' +
                '</div>');

            var games_list = category.games;
            var games_length = games_list.length;
            for (var j = 0; j < games_length; j++) {
                var game = games_list[j];

                if (game.uri) {
                    list_html.append(
                        '<div class="row">' +
                            '<div class="col-md-8 col-md-push-4">' +
                                '<h4>' + 
                                    '<a href="' + game.uri + '">' +
                                        game.name +
                                    '</a>' +
                                '</h4>' +
                            '</div>' +
                            '<div class="col-md-4 col-md-pull-8">' +
                                '<a href="photos/' + game.photo + '" data-toggle="lightbox"' +
                                    'data-title="' + game.name + '">' +
                                    '<img src="photos/' + game.photo + '" class="img-rounded img-responsive">' +
                                '</a>' +
                            '</div>' +
                        '</div>');
                }
                else {
                    list_html.append(
                        '<div class="row">' +
                            '<div class="col-md-8 col-md-push-4">' +
                                '<h4>' + 
                                    game.name +
                                '</h4>' +
                            '</div>' +
                            '<div class="col-md-4 col-md-pull-8">' +
                                '<a href="photos/' + game.photo + '" data-toggle="lightbox"' +
                                    'data-title="' + game.name + '">' +
                                    '<img src="photos/' + game.photo + '" class="img-rounded img-responsive">' +
                                '</a>' +
                            '</div>' +
                        '</div>');
                }
            }
        }

        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    });
})();

