async function loadDemoConfig() {
  const statusEl = document.getElementById("demo-status");
  const linkEl = document.getElementById("demo-link");
  const updatedEl = document.getElementById("updated-at");
  const copyEl = document.getElementById("copy-link");

  try {
    const response = await fetch("demo-config.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load demo-config.json: ${response.status}`);

    const config = await response.json();
    const demoUrl = config.demo_url || "#";
    const status = config.status || "offline";

    linkEl.href = demoUrl;
    updatedEl.textContent = config.updated_at || "sin registro";

    if (status === "online" && demoUrl !== "#") {
      statusEl.textContent = "Estado: demo en línea";
      statusEl.style.background = "rgba(0, 245, 212, 0.18)";
    } else {
      statusEl.textContent = "Estado: demo fuera de línea o pendiente de actualización";
      statusEl.style.background = "rgba(255, 255, 255, 0.13)";
    }

    copyEl.addEventListener("click", async () => {
      if (demoUrl === "#") return;
      await navigator.clipboard.writeText(demoUrl);
      copyEl.textContent = "Enlace copiado";
      setTimeout(() => copyEl.textContent = "Copiar enlace", 1600);
    });
  } catch (error) {
    statusEl.textContent = "Estado: no se pudo cargar la configuración del enlace";
    linkEl.href = "#";
    console.error(error);
  }
}
loadDemoConfig();
