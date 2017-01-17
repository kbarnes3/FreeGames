(function () {
    "use strict";

    $(document).ready(function () {
        var all_games = [
            { category: 'Puzzles',
               games: [
                { name: 'Puppy puzzle', photo: 'Puppy.jpg', },
                { name: 'Dolphin puzzle', photo: 'Dolphin.jpg', },
               ], },
            { category: 'Party/Big Group Games',
               games: [
                { name: 'Wits &amp; Wagers Party', photo: 'WitsWagers.jpg', },
                { name: 'Big Bang Theory Trivia Game', photo: 'BigBangTheory.jpg', },
                { name: 'The Original Left Center Right Dice Game', photo: 'LCR.jpg', uri: 'https://boardgamegeek.com/boardgame/3522/lcr' },
               ], },
            { category: 'Classic Games',
               games: [
                { name: 'Connect 4', photo: 'Connect4.jpg' },
                { name: 'Mancala', photo: 'Mancala.jpg', },
                { name: 'Star Wars Operation: Silly Skill Game', photo: 'StarWarsOperation.jpg' },
                { name: 'Transformers Monopoly: Collector\'s Edition', photo: 'TransformersMonopoly.jpg', },
                { name: '3 in 1 Game Set - Chinese Checkers, Chess, Checkers', photo: '3in1.jpg', },
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
                var game_html = 
                    '<div class="row">' +
                        '<div class="col-md-8 col-md-push-4">' +
                            '<h4>';

                if (game.uri) {
                    game_html +=
                                    '<a href="' + game.uri + '">' +
                                        game.name +
                                    '</a>';
                }
                else {
                    game_html +=
                                    game.name;
                }

                game_html +=
                            '</h4>' +
                        '</div>';

                if (game.photo) {
                    game_html += 
                            '<div class="col-md-4 col-md-pull-8">' +
                                '<a href="photos/' + game.photo + '" data-toggle="lightbox"' +
                                    'data-title="' + game.name + '">' +
                                    '<img src="photos/' + game.photo + '" class="img-rounded img-responsive">' +
                                '</a>' +
                            '</div>';
                }

                game_html +=
                    '</div>';

                list_html.append(game_html);
            }
        }

        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    });
})();

