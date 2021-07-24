function dog_size(dogsize) {
    var message = "";

    if (dogsize == 1) {
        message = "約15.20歳";
    } else if (dogsize == 2) {
        message = "約13.99歳";
    } else if (dogsize == 3) {
        message = "約13.69歳";
    } else {
        message = "想定されていない引数です．";
    }

    alert(message);

}