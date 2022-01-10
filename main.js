function preload() {


}

function setup() {
    canvas = createCanvas(750, 550);
    canvas.position(100, 300);
    webcam1 = createCapture(VIDEO);
    webcam1.hide();
    filtercolor = "";
}

function draw() {
    image(webcam1, 0, 0, 750, 550);
    tint(filtercolor);

}

function take_snapshot() {
    save('YoUr PhOtO.png');
}

function apply_filter() {
    filtercolor = document.getElementById("filterinput").value;
}