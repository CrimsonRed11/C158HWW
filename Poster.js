AFRAME.registerComponent("ipad-posters", {
    init: function() {
      this.postersContainer = this.el;
      this.posters();
    },
   posters: function() {
      const postersRef = [
        {
          id: "iPadPro2018",
          url: "iPadPro2018.jpg"
        },
        {
          id: "iPadPro2022",
          url: "iPadPro2022.webp"
        },
  
        {
          id: "iPadPro2022",
          url: "iPadPro2024.jpg"
        },
       
      ];
      let prevoiusXPosition = -70;
    for (var item of postersRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
     const borderEl = this.createBorder(position, item.id);
     const iPad= this.createPoster(item);
        borderEl.appendChild(iPad);
  
        this.iPadContainer.appendChild(borderEl);
      }
    },
    createBorder: function(position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 22,
        height: 40
      })
    entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", { color: "#fff" });
      entityEl.setAttribute("cursor-listener", {});
      return entityEl;
    },
    createPoster: function(item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 20,
        height: 28
      });
    entityEl.setAttribute("position", { x: 0, y: 5, z: 0.1 });
      entityEl.setAttribute("material", { src: item.url });
   return entityEl;
    }
  });