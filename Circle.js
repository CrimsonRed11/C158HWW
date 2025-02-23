AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },  
    handleMouseEnterEvents: function () {
      
      this.el.addEventListener("mouseenter", () => {
        const id = this.el.getAttribute("id");
        const iPadId = [
          "iPadPro2018",
          "iPadPro2022",
          "iPadPro2024",
        ];
        if (iPadId.includes(id)) {
          const iPadContainer = document.querySelector("#iPad-container");
          iPadContainer.setAttribute("cursor-listener", {
            selectedItemId: id,
          });
          this.el.setAttribute("material", { color: "#1565c0" });
        }
      });
    },
    handleMouseLeaveEvents: function () {
    this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", { color: "#fff" });
          }
        }
      });
    },
    
  });