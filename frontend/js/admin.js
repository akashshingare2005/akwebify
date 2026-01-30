document.addEventListener("DOMContentLoaded",()=>{
  const token=localStorage.getItem("adminToken");
  if(!token) return;

  fetch("/api/orders",{headers:{Authorization:`Bearer ${token}`}})
    .then(r=>r.json())
    .then(d=>{
      const table=document.getElementById("ordersTable");
      if(!table) return;
      table.innerHTML=d.data.map(o=>`
        <tr>
          <td>${o.name}</td>
          <td>${o.email}</td>
          <td>${o.projectType}</td>
          <td>${o.status}</td>
        </tr>
      `).join("");
    });
});

