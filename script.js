ymaps.ready(init);

function init() {
    const map = new ymaps.Map("map", {
        center: [55.751574, 37.573856],
        zoom: 5,
        type: 'yandex#hybrid',
        controls: ['fullscreenControl']
    });

    const roadSelect = document.getElementById('roads');

    roads.forEach((road, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = road.name;
        roadSelect.appendChild(option);
    });

    function showRoad(road) {
        document.getElementById('roadDetails').innerHTML = `
                    <h2><strong>${road.name}</strong></h2><br>
                    ${road.info}
                `;

        ymaps.route(road.coordinates, {mapStateAutoApply: true})
            .then(function (route) {
                route.getPaths().options.set({
                    strokeColor: '#f61abe',
                    opacity: 1
                });

                map.geoObjects.removeAll();
                map.geoObjects.add(route);

                const bounds = route.getBounds();
                map.setBounds(bounds, {checkZoomRange: true});
            });
    }

    showRoad(roads[0]);

    roadSelect.addEventListener('change', function () {
        const selectedIndex = roadSelect.value;
        const road = roads[selectedIndex];
        showRoad(road);
    });
}