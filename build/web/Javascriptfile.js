/* global ctx */

function btnClearAll() {
    location.reload();
}
function btnRefresh() {
    location.reload();
}
//function loadImage(src, onload) {
//    var img = new Image();
//
//    img.onload = onload;
//    img.src = src;
//
//    return img;
//}

//function main() {
//    imagesLoaded += 1;
//
//    if(imagesLoaded == 2) {
//        // composite now
//        ctx.drawImage(img1, 0, 0);
//
//        ctx.globalAlpha = 0.5;
//        ctx.drawImage(img2, 0, 0);
//    }
//}
function draw_Bkgrnd(ctx, image){
      // If the image is not ready, wait and try again in 
      // approx 50 milliseconds
      if (!image.complete){
        setTimeout(function(){
          draw_Bkgrnd(ctx, image);
        }, 50);
        return; 
      }
      // Basic image draw
      ctx.drawImage(image, 0, 0, 1090, 550);
    }

function draw(ctx, image){
      // If the image is not ready, wait and try again in 
      // approx 50 milliseconds
      if (!image.complete){
        setTimeout(function(){
          draw(ctx, image);
        }, 50);
        return; 
      }
      // Basic image draw
      //ctx.drawImage(image, 20, 150, 1050, 350);
      ctx.drawImage(image, 20, 150, 1050, 350);
    }

function fun_WallSheet() {
        var x = document.getElementById("WallSheetSelect").value;
        var image1 = new Image();
        image1.src = "Resources/Wall_sheeting/"+ x + ".png";
        draw(ctx,image1);
        
        var image2 = new Image();
        image2.src = "Resources/Logo.png";
        draw(ctx,image2);
    }
    
function fun_RoofSheet() {
    var x = document.getElementById("RoofSheetSelect").value;
    var image1 = new Image();
    image1.src = "Resources/Roof_sheeting/"+ x + ".png";
    draw(ctx,image1);
    
    var image2 = new Image();
    image2.src = "Resources/Logo.png";
    draw(ctx,image2);
}

function fun_BuildTrims() {
    var x = document.getElementById("ID_BuildTrims").value;
    var image1 = new Image();
    image1.src = "Resources/Build_trims/"+ x + ".png";
    draw(ctx,image1);
}

function fun_RoofMS() {
    var x = document.getElementById("ID_RoofMS").value;
    var image1 = new Image();
    image1.src = "Resources/Roof_ms/"+ x + ".png";
    draw(ctx,image1);
}

function fun_CanopyRoofSht() {
    var x = document.getElementById("ID_CanopyRoofSht").value;
    var image1 = new Image();
    image1.src = "Resources/Canopy_RS/"+ x + ".png";
    draw(ctx,image1);
}

function fun_CanopyWallSht() {
    var x = document.getElementById("ID_CanopyWallSht").value;
    var image1 = new Image();
    image1.src = "Resources/Canopy_WS/"+ x + ".png";
    draw(ctx,image1);
}

function fun_IndusLouver() {
    var x = document.getElementById("ID_IndusLouver").value;
    var image1 = new Image();
    image1.src = "Resources/Industrial_Louver/"+ x + ".png";
    draw(ctx,image1);
}

function fun_FixedLouver() {
    var x = document.getElementById("ID_FixedLouver").value;
    var image1 = new Image();
    image1.src = "Resources/Fixed_Louver/"+ x + ".png";
    draw(ctx,image1);
}

function fun_Downspout() {
    var x = document.getElementById("ID_Downspout").value;
    var image1 = new Image();
    image1.src = "Resources/Downspouts/"+ x + ".png";
    draw(ctx,image1);
}

function fun_RidgeVent() {
    var x = document.getElementById("ID_RidgeVent").value;
    var image1 = new Image();
    image1.src = "Resources/RVent/"+ x + ".png";
    draw(ctx,image1);
}

function fun_Doors() {
    var x = document.getElementById("ID_Doors").value;
    var image1 = new Image();
    image1.src = "Resources/Doors/"+ x + ".png";
    draw(ctx,image1);
}
