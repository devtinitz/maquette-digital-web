const COMPONENTS = {
    // 1. TOP NAVBAR (Global Context)
    navbar: `
        <header class="h-24 header-tinitz border-b border-black/5 px-12 flex items-center justify-between sticky top-0 z-50">
            <div class="flex items-center gap-12">
                <div class="flex items-center gap-4 cursor-pointer" onclick="app.router.goTo('home')">
                    <div class="w-10 h-10 bg-tinitz-red flex items-center justify-center rounded-xl shadow-lg ring-4 ring-tinitz-red/10">
                         <img src="assets/img/logo.png" class="h-5 invert">
                    </div>
                    <span class="text-2xl font-black text-tinitz-blue tracking-tighter uppercase italic leading-none">TINITZ <span class="text-[8px] tracking-[.5em] block opacity-40 -mt-1 font-bold">Elite Management</span></span>
                </div>
            </div>
            <div class="flex items-center gap-10">
                <div class="hidden xl:flex items-center bg-slate-100 rounded-2xl px-6 py-2.5 border border-slate-200 min-w-[300px]">
                    <i data-lucide="search" class="w-4 h-4 text-slate-400 mr-4"></i>
                    <input type="text" placeholder="Recherche Elite..." class="bg-transparent border-none text-[11px] font-bold text-slate-900 focus:ring-0 w-full placeholder:text-slate-300 placeholder:uppercase placeholder:tracking-widest">
                </div>
                <div class="flex items-center gap-4 pl-6 border-l border-slate-100 group cursor-pointer">
                    <div class="text-right">
                        <p class="text-[11px] font-black text-slate-900 uppercase italic">DirectionTest</p>
                        <p class="text-[8px] font-black uppercase text-emerald-600 tracking-widest">Connecté</p>
                    </div>
                    <img src="https://ui-avatars.com/api/?name=DIRECTION&background=114282&color=fff" class="w-12 h-12 rounded-2xl shadow-xl border-2 border-white">
                </div>
            </div>
        </header>
    `,

    // 1.5 DYNAMIC SIDEBAR
    sidebar: `
        <aside class="w-80 bg-white border-r border-slate-200 flex flex-col h-full z-40 overflow-hidden">
            <div class="flex-1 overflow-y-auto p-6 space-y-10 custom-scrollbar">
                
                <div>
                    <label class="px-6 label-bold-caps text-[9px] mb-6 block opacity-40">Noyau Système</label>
                    <nav class="space-y-1">
                        <button onclick="app.router.goTo('home')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="home">
                            <i data-lucide="layout-grid" class="w-5 h-5"></i>
                            Tableau de bord
                        </button>
                    </nav>
                </div>

                <div>
                    <label class="px-6 label-bold-caps text-[9px] mb-6 block opacity-40">Opérations & Hardware</label>
                    <nav class="space-y-1">
                        <button onclick="app.router.goTo('bornes')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="bornes">
                            <i data-lucide="monitor" class="w-5 h-5"></i>
                            Bornes TDISPLAY
                        </button>
                        <button onclick="app.router.goTo('cms')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="cms">
                            <i data-lucide="layers" class="w-5 h-5"></i>
                            CMS Signage
                        </button>
                    </nav>
                </div>

                <div>
                    <label class="px-6 label-bold-caps text-[9px] mb-6 block opacity-40">Growth & Marketing</label>
                    <nav class="space-y-1">
                        <button onclick="app.router.goTo('vote-list')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="vote">
                            <i data-lucide="award" class="w-5 h-5"></i>
                            Votes & Résultats
                        </button>
                        <button onclick="app.router.goTo('ads')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="ads">
                            <i data-lucide="zap" class="w-5 h-5"></i>
                            Régie Publicitaire
                        </button>
                        <button onclick="app.router.goTo('crm')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="crm">
                            <i data-lucide="users" class="w-5 h-5"></i>
                            CRM Participant
                        </button>
                    </nav>
                </div>

                <div>
                    <label class="px-6 label-bold-caps text-[9px] mb-6 block opacity-40">Finance</label>
                    <nav class="space-y-1">
                        <button onclick="app.router.goTo('billing')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="billing">
                            <i data-lucide="credit-card" class="w-5 h-5"></i>
                            Mes Factures
                        </button>
                        <button onclick="app.router.goTo('plans')" class="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:bg-slate-50 hover:text-tinitz-red transition-all" data-sb="plans">
                            <i data-lucide="shield-check" class="w-5 h-5"></i>
                            Forfaits Elite
                        </button>
                    </nav>
                </div>

            </div>
            <div class="px-8 py-8 border-t border-slate-100 bg-slate-50/50">
                <button class="w-full p-4 bg-slate-900 text-white rounded-2xl flex items-center justify-between group hover:bg-tinitz-red transition-all">
                    <span class="text-[9px] font-black uppercase tracking-widest leading-none">Déconnexion</span>
                    <i data-lucide="log-out" class="w-4 h-4 opacity-50 group-hover:opacity-100"></i>
                </button>
            </div>
        </aside>
    `,

    // 2. HOME VIEW (List of Events)
    home: `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-7xl mx-auto space-y-12">
                <div class="flex justify-between items-end">
                    <div class="space-y-2">
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic leading-none tracking-tighter">Mes événements</h2>
                        <p class="label-bold-caps">PILOTAGE CENTRALISÉ DE VOS DÉPLOIEMENTS TECHNOLOGIQUES</p>
                    </div>
                    <button class="px-12 py-5 bg-tinitz-red text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl shadow-premium hover:scale-105 active:scale-95 transition-all">+ Créer un événement</button>
                </div>

                <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    <!-- Dashboard Card -->
                    <div class="card-premium p-10 cursor-pointer group hover:bg-white transition-all border-b-8 border-tinitz-red bg-slate-50/50" onclick="app.router.goTo('event-hub', 'Rencontre Leaders')">
                        <div class="flex justify-between items-start mb-8">
                            <span class="px-5 py-2 bg-emerald-100 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/10 shadow-sm animate-pulse">Live Now</span>
                            <p class="text-[10px] font-black italic opacity-20 uppercase tracking-widest">UID: N4GH7Z</p>
                        </div>
                        <h4 class="text-3xl font-black text-tinitz-blue uppercase italic tracking-tighter mb-4 leading-tight group-hover:text-tinitz-red transition-colors">Rencontre des Leaders</h4>
                        <div class="flex items-center gap-3 text-slate-400 mb-8 border-b border-slate-50 pb-8">
                            <i data-lucide="map-pin" class="w-4 h-4"></i>
                            <span class="text-[11px] font-bold uppercase tracking-widest leading-none">Tinitz Halls • 25 Mars 2026</span>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div><p class="label-bold-caps mb-1 opacity-40">Tickets</p><p class="text-lg font-black text-slate-900">1,420</p></div>
                            <div><p class="label-bold-caps mb-1 opacity-40">Ads</p><p class="text-lg font-black text-emerald-600">4.2k</p></div>
                            <div><p class="label-bold-caps mb-1 opacity-40">Sync</p><p class="text-lg font-black text-tinitz-blue">98%</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 3. EVENT HUB VIEW (Selected Event Dashboard)
    eventHub: (eventName) => `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-7xl mx-auto space-y-12">
                <div class="flex items-center gap-6 mb-12 border-b border-slate-100 pb-12">
                    <button onclick="app.router.goTo('home')" class="p-4 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-tinitz-red transition-all shadow-sm"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                    <div>
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic leading-none tracking-tighter">${eventName} <span class="text-tinitz-red">Console Control</span></h2>
                        <div class="flex items-center gap-3 mt-4">
                            <span class="px-4 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Elite Project</span>
                            <span class="label-bold-caps">Dernière synchro : Il y a 2 min</span>
                        </div>
                    </div>
                </div>

                <div class="grid lg:grid-cols-4 gap-8">
                    <!-- Growth: Billetterie & CRM -->
                    <div class="card-premium p-8 flex flex-col cursor-pointer group hover:bg-white transition-all border-t-4 border-emerald-500" onclick="app.router.goTo('crm')">
                        <div class="flex justify-between items-start mb-10">
                            <div class="p-4 bg-emerald-50 text-emerald-600 rounded-2xl group-hover:scale-110 transition-transform"><i data-lucide="users" class="w-8 h-8"></i></div>
                            <span class="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Growth Live</span>
                        </div>
                        <h5 class="text-2xl font-black text-slate-900 uppercase italic mb-2">1,420 Participants</h5>
                        <p class="label-bold-caps text-slate-400">CRM & Access Management</p>
                    </div>

                    <!-- Operations: Hardware -->
                    <div class="card-premium p-8 flex flex-col cursor-pointer group hover:bg-white transition-all border-t-4 border-tinitz-blue" onclick="app.router.goTo('bornes')">
                        <div class="flex justify-between items-start mb-10">
                            <div class="p-4 bg-blue-50 text-tinitz-blue rounded-2xl group-hover:scale-110 transition-transform"><i data-lucide="monitor" class="w-8 h-8"></i></div>
                            <span class="text-[9px] font-black text-tinitz-blue uppercase tracking-widest">Opérations</span>
                        </div>
                        <h5 class="text-2xl font-black text-slate-900 uppercase italic mb-2">12 Bornes Online</h5>
                        <p class="label-bold-caps text-slate-400">Monitoring TDISPLAY</p>
                    </div>

                    <!-- Growth: Ads & Revenue -->
                    <div class="card-premium p-8 flex flex-col cursor-pointer group hover:bg-slate-950 transition-all border-t-4 border-amber-500" onclick="app.router.goTo('ads')">
                        <div class="flex justify-between items-start mb-10">
                            <div class="p-4 bg-amber-50 text-amber-600 rounded-2xl group-hover:scale-110 transition-transform"><i data-lucide="zap" class="w-8 h-8"></i></div>
                            <span class="text-[9px] font-black text-amber-600 uppercase tracking-widest">Monétisation</span>
                        </div>
                        <h5 class="text-2xl font-black text-slate-900 uppercase italic mb-2 group-hover:text-white transition-colors">4.2k Impressions</h5>
                        <p class="label-bold-caps text-slate-400 group-hover:text-white/40">Régie Publicitaire In-Event</p>
                    </div>

                    <!-- Content: CMS -->
                    <div class="card-premium p-8 flex flex-col cursor-pointer group hover:bg-white transition-all border-t-4 border-tinitz-red" onclick="app.router.goTo('cms')">
                        <div class="flex justify-between items-start mb-10">
                            <div class="p-4 bg-red-50 text-tinitz-red rounded-2xl group-hover:scale-110 transition-transform"><i data-lucide="layers" class="w-8 h-8"></i></div>
                            <span class="text-[9px] font-black text-tinitz-red uppercase tracking-widest">Content</span>
                        </div>
                        <h5 class="text-2xl font-black text-slate-900 uppercase italic mb-2">62 Slides</h5>
                        <p class="label-bold-caps text-slate-400">Digital Signage Live</p>
                    </div>
                </div>

                <!-- Live Monitoring Log (Enhanced) -->
                <div class="card-premium p-12 mt-12 bg-white shadow-premium">
                    <div class="flex items-center justify-between mb-12">
                        <div>
                            <h4 class="text-sm font-black text-tinitz-blue uppercase tracking-[0.3em] italic leading-none mb-2">Log de Présence Temps Réel</h4>
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Flux continu des accès VIP & Standard</p>
                        </div>
                        <div class="flex gap-4">
                            <button class="px-6 py-3 bg-emerald-50 text-emerald-600 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-emerald-100 flex items-center gap-2">
                                <span class="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span> Live Sync ON
                            </button>
                            <button class="px-8 py-3 bg-slate-950 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:bg-tinitz-red transition-all">Exporter Data CSV</button>
                        </div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="text-[10px] font-black uppercase tracking-widest text-slate-300 border-b border-slate-100">
                                <tr><th class="pb-8">Participant</th><th class="pb-8">Code Ticket</th><th class="pb-8">Segment</th><th class="pb-8">Status Bornes</th><th class="pb-8 text-right">Heure</th></tr>
                            </thead>
                            <tbody class="text-[11px] font-bold text-slate-700 divide-y divide-slate-50">
                                <tr class="hover:bg-slate-50 transition-colors group"><td class="py-6 flex items-center gap-4"><img src="https://ui-avatars.com/api/?name=David+C&background=114282&color=fff" class="w-10 h-10 rounded-xl shadow-sm"> <span class="group-hover:text-tinitz-red transition-colors">David Chen</span></td><td class="py-6 text-tinitz-red uppercase tracking-wider font-black">TZ-884-PK</td><td class="py-6"><span class="px-4 py-1.5 bg-tinitz-blue/10 text-tinitz-blue rounded-full text-[9px] font-black uppercase">Elite Platinum</span></td><td class="py-6"><div class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-emerald-500"></i> <span class="text-[10px] opacity-40">Borne #04</span></div></td><td class="py-6 text-right opacity-30 italic">14:52:03</td></tr>
                                <tr class="hover:bg-slate-50 transition-colors group"><td class="py-6 flex items-center gap-4"><img src="https://ui-avatars.com/api/?name=Sarah+M&background=020617&color=fff" class="w-10 h-10 rounded-xl shadow-sm"> <span class="group-hover:text-tinitz-red transition-colors">Sarah Mundi</span></td><td class="py-6 text-tinitz-red uppercase tracking-wider font-black">TZ-122-JK</td><td class="py-6"><span class="px-4 py-1.5 bg-amber-50 text-amber-600 rounded-full text-[9px] font-black uppercase">Exposant</span></td><td class="py-6"><div class="flex items-center gap-2"><i data-lucide="clock" class="w-4 h-4 text-slate-300"></i> <span class="text-[10px] opacity-20 uppercase">En attente scan</span></div></td><td class="py-6 text-right opacity-10">--:--:--</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 4. BILLING VIEW
    billing: `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-7xl mx-auto space-y-12">
                <div class="flex justify-between items-end">
                    <div class="space-y-4">
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic leading-none tracking-tighter">Finance & Facturation</h2>
                        <p class="label-bold-caps">GESTION DES FORFAITS ELITE ET CONSOMMATION RESSOURCES</p>
                    </div>
                </div>
                
                <div class="grid grid-cols-3 gap-10">
                    <div class="card-premium p-10 stats-card-blue text-white bg-slate-950">
                        <p class="label-bold-caps text-white/40 mb-2">Volume Facturation</p>
                        <p class="text-5xl font-black tracking-tighter">15.4M <span class="text-xs uppercase text-tinitz-red">FCFA</span></p>
                    </div>
                    <div class="card-premium p-10 bg-emerald-600 text-white shadow-emerald-500/20">
                        <p class="label-bold-caps text-white/40 mb-2">Collecte Ticket</p>
                        <p class="text-5xl font-black tracking-tighter">98%</p>
                    </div>
                    <div class="card-premium p-10 bg-slate-200 text-slate-400 opacity-60">
                        <p class="label-bold-caps mb-2">Crédit Publicitaire</p>
                        <p class="text-5xl font-black tracking-tighter">250k</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 5. PLANS VIEW
    plans: `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-7xl mx-auto space-y-12">
                <div class="text-center space-y-4 mb-20">
                    <h2 class="text-5xl font-black text-slate-900 uppercase italic leading-none tracking-tighter">Plan & Performance</h2>
                    <p class="label-bold-caps">CHOISISSEZ LA PUISSANCE ÉLITE ADAPTÉE À VOS ÉVÉNEMENTS CRITIQUES</p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-10">
                    <!-- Plan 1 -->
                    <div class="card-premium p-12 bg-white relative group overflow-hidden">
                        <div class="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                        <div class="relative z-10">
                            <h4 class="text-2xl font-black text-tinitz-blue mb-4 uppercase italic">Pro LEASING</h4>
                            <p class="text-4xl font-black text-slate-900 mb-8 tracking-tighter">60.000 <span class="text-xs uppercase text-slate-400 tracking-widest font-bold">FCFA / Event</span></p>
                            <ul class="space-y-4 mb-12 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                                <li class="flex items-center gap-3"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> 200 Tickets Max</li>
                                <li class="flex items-center gap-3"><i data-lucide="check" class="w-4 h-4 text-emerald-500"></i> 2 Bornes TDISPLAY</li>
                                <li class="flex items-center gap-3 opacity-20 line-through"><i data-lucide="x" class="w-4 h-4 text-slate-300"></i> Régie Publicitaire</li>
                            </ul>
                            <button class="w-full py-5 border-2 border-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400 hover:border-tinitz-red hover:text-tinitz-red transition-all">Votre plan actuel</button>
                        </div>
                    </div>
                    <!-- Plan 2 (Elite) -->
                    <div class="card-premium p-12 bg-slate-950 text-white border-4 border-tinitz-red shadow-2xl relative">
                        <div class="absolute top-0 right-0 p-8 pt-10"><span class="bg-tinitz-red text-white py-2 px-6 rounded-full text-[9px] font-black uppercase tracking-widest animate-pulse">Recommandé Elite</span></div>
                        <h4 class="text-2xl font-black italic uppercase mb-4">Elite SYNC + CRM</h4>
                        <p class="text-4xl font-black mb-8 tracking-tighter">150.000 <span class="text-xs uppercase opacity-40 tracking-widest font-bold">FCFA / Event</span></p>
                        <ul class="space-y-4 mb-12 text-white/60 text-[10px] font-black uppercase tracking-widest">
                            <li class="flex items-center gap-3"><i data-lucide="zap" class="w-4 h-4 text-tinitz-red fill-tinitz-red"></i> Participants Illimités</li>
                            <li class="flex items-center gap-3"><i data-lucide="zap" class="w-4 h-4 text-tinitz-red fill-tinitz-red"></i> 10 Bornes PRO</li>
                            <li class="flex items-center gap-3"><i data-lucide="zap" class="w-4 h-4 text-tinitz-red fill-tinitz-red"></i> CRM & Régie Pub</li>
                        </ul>
                        <button class="w-full py-6 bg-tinitz-red text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-premium hover:scale-[1.02] active:scale-95 transition-all">Migrer en Mode Élite</button>
                    </div>
                </div>
            </div>
        </div>
    `
};
