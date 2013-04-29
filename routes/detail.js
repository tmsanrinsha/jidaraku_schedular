/*
 * GET home page.
 */

exports.detail = function( req, res ) {

    // --------- 関数定義 ---------

    var mkDate = function( timestamp ) {

            var date = new Date( timestamp );

            var year  = date.getYear(),
                month = date.getMonth() + 1,
                day   = date.getDate();

            if ( year < 2000 ) { year += 1900; }
            if ( month < 10 ) { month = "0" + month; }
            if ( day < 10 ) { day = "0" + day; }

            return ( year + '/' + month + '/' + day );
        },

        setEventInfo = function( userId, eventId ) {
        
            // eventIdを指定してmongoDBからイベント情報取得

            var eventInfo = {
                    "EventName" : "第三回開発作戦会議！！！",
                    "StartDate" : 1366988400000
                };

            // 本来はコールバック内で実行する
            res.render( 'detail', {
                id   : eventId,
                user : userId,
                title: eventInfo.EventName,
                date : mkDate( eventInfo.StartDate )
            } );
        };

    // --------- 処理 ---------
    
    ( function() {

        var user = 'muhuhuhuhu';

        if ( req.query.user !== undefined ) {

            user = req.query.user;
        }
    
        if ( req.query.id === undefined ) {
            
            // IDが指定されていないのでエラー表示

            console.log( 'id is nothing' );

            res.redirect( '/events' );

        } else {
        
            setEventInfo( user, req.query.id );
        }
        
    } )();
};
