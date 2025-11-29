import Script from "next/script";

export default function LightRays() {
  return (
    <div className="fixed inset-0 w-full h-full -z-20 overflow-hidden bg-black pointer-events-none">
      <div className="aura-background-component absolute inset-0 w-full h-full opacity-60">
        <div
          data-us-project="uFY4IYPs2LU8fWm96Im2"
          className="absolute w-full h-full left-0 top-0"
        ></div>
        <Script
          id="unicorn-studio"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          `,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-emerald-500/30 mix-blend-overlay"></div>
    </div>
  );
}
