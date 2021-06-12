var canvas = new fabric.Canvas("myCanvas");
var blockimg_width = 30;
var blockimg_height = 30;
var player_x = 10;
var player_y = 10;
var player_object = "";
function player_update (){
fabric.Image.fromURL("player.jpeg", function(Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top: player_y,
    left: player_x
});
canvas.add(player_object);
})

}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        blockimg_object = Img;
        blockimg_object.scaleToWidth(blockimg_width);
        blockimg_object.scaleToHeight(blockimg_height);
        blockimg_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blockimg_object);
    })
}

