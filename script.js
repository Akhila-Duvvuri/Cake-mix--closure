let chefCount = 0;


    function createChef() {
      
        let count = 0;
      
        const chefId = ++chefCount;

        
      const chefBox = document.createElement("div");
      
        chefBox.className = "chef-box";
      
        chefBox.id = `chef-${chefId}`;

        
      chefBox.innerHTML = `
        
        <h3>👨‍🍳 Chef #${chefId}</h3>
        
        <p>Cake Mix (count): <span id="count-${chefId}">0</span></p>
        
        <button onclick="bake(${chefId})">Call counter() → Bake 🍰</button>
        
        <div class="output" id="output-${chefId}"></div> `;

        
      document.getElementById("chefArea").appendChild(chefBox);

        
      // Store closure
      const bakeFunction = function () {
        
          count++;
        
          document.getElementById(`count-${chefId}`).innerText = count;
        
          document.getElementById(`output-${chefId}`).innerText = `Chef #${chefId} baked cake #${count}! 🎂`;
      };

        
      
        window[`bake_${chefId}`] = bakeFunction;
    
    }


    function bake(chefId) {
      
        window[`bake_${chefId}`]();
    
    }























