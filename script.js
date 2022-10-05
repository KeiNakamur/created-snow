let snowContainer = document.querySelector('.snow-container');

const createSnow = () => {
    // 雪の要素を生成
    //spanタグを生成し、
    let snow = document.createElement('span');
    //そのspanタグを持った変数snowに対してsnowといった名前のクラスを生成してstyle.cssを適用させる
    snow.className = "snow";

    minSize = 5;
    maxSize = 8;

    //雪の大きさをランダムに
    let snowSize = Math.random() * (maxSize - minSize) + minSize;
    //snowSizeの大きさがこれでランダムで適用される
    snow.style.width = snowSize + "px";
    snow.style.height = snowSize + "px";

    //以下に雪の降る位置をランダムに指定
    snow.style.left = Math.random() * 100 + "%";

    //作成したsnowをsnowContainerの中にappendChildで入れる
    snowContainer.appendChild(snow);

    //20秒後とかに雪を消す
    setTimeout(() => {
        snow.remove();
    }, 10000);
};

setInterval(createSnow, 100);