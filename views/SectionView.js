define(['jquery', 'underscore', 'js/view',
    'views/ContentViewFactory'],
function($, _, View,
    ContentViewFactory
) {
    return View.extend({
        templateUrl: 'html/Include/Section.html',
        tagName: 'div',
        className: 'section',
        isFirst: false,
        isFirstPage: false,
        beforeLoad: function() {
            var $t = this;

            $t.contents = [];

            $t.model.get('contents').each(function(content) {
                $t.contents.push(ContentViewFactory.getInstance(content));
            });
        },
        render: function() {
            var $t = this;

            $t.model.bind('change:display', function() {
                if($t.model.get('display')) {
                    $t.$el.show();
                } else {
                    $t.$el.hide();
                }
            });

            $t.model.trigger('change:display');

            $t.$el.attr('id', 'section' + $t.model.get('sectionId'));

            if($t.options.isFirst) {
                $t.$el.addClass('first');
            }

            if($t.options.isFirstPage && !$t.options.isFirst) {
                $t.$el.addClass('collapse');
            }

            $t.$el.html($t.html($t.model.toJSON()));

            _.each($t.contents, function(content) {
                $('.sectionBody', $t.$el).append(content.el);
            });

            if($t.options.isFirst && $t.options.isFirstPage) {                
                $('.sectionBody', $t.$el).append($(document.createElement('span'))
                    .attr('class', 'next')
                    .append($(document.createElement('button'))
                        .append($(document.createElement('span'))
                        .attr('class', 'text').text($t.getTemplate().get('btnLabelNext')))));

                $('.next button', $t.$el).click(function(e) {
                    e.preventDefault();

                    var scrollTarget;
                    $('.section').each(function(i, el) {
                        if(!$(el).hasClass('first')) {
                            scrollTarget = $(el).attr('id');
                            return false;
                        }
                    });

                    $('.section .sectionBody').show(250, function() {
                        $('.section').removeClass('collapse');
                    }); 

                    $('.first .sectionBody')
                        .hide(250, function() {
                            $('.section.first')
                                .removeClass('first')
                                .addClass('collapse');

                            if(scrollTarget) {
                                $t.scrollTo(scrollTarget, 100);
                            }
                        });

                    // don't like putting this here
                    $('.buttons').show();
                });
            }
        }
    });
});