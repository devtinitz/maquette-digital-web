const VOTE_COMPONENTS = {
    // 1. GLOBAL LIST OF CATEGORIES (Capture 22.26.48.png)
    list: `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-7xl mx-auto space-y-12">
                <div class="flex items-center justify-between mb-12">
                    <div class="space-y-2">
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Gestion des Votes</h2>
                        <p class="label-bold-caps">PILOTAGE DES SCRUTINS ET DES CANDIDATURES LIVE</p>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="app.router.goTo('vote-form')" class="px-8 py-4 stats-card-orange text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-tinitz-red/20 active:scale-95 transition-all">+ Ajouter une catégorie</button>
                        <button onclick="app.router.goTo('vote-stats')" class="px-8 py-4 bg-tinitz-blue text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl active:scale-95 transition-all">Voir les statistiques</button>
                        <button class="px-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest"><i data-lucide="qr-code" class="w-4 h-4"></i></button>
                    </div>
                </div>

                <div class="card-premium p-10 bg-white">
                    <div class="flex items-center justify-between mb-10">
                        <h4 class="text-sm font-black text-tinitz-blue uppercase tracking-widest italic">Aperçu Global</h4>
                        <div class="flex items-center bg-slate-100 rounded-xl px-4 py-2">
                            <i data-lucide="search" class="w-4 h-4 text-slate-400 mr-2"></i>
                            <input type="text" placeholder="Rechercher..." class="bg-transparent border-none text-[10px] uppercase font-black focus:ring-0">
                        </div>
                    </div>
                    <table class="w-full text-left">
                        <thead class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 border-b border-slate-50">
                            <tr><th class="pb-6">Nom</th><th class="pb-6">Description</th><th class="pb-6">Nb de candidat(s)</th><th class="pb-6 text-right">Actions</th></tr>
                        </thead>
                        <tbody class="text-[11px] font-bold text-slate-700 divide-y divide-slate-50">
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="py-6 font-black text-tinitz-blue uppercase italic">Techno</td>
                                <td class="py-6 opacity-40 italic">Innovation Technologique 2026</td>
                                <td class="py-6"><span class="px-3 py-1 bg-tinitz-blue text-white rounded-lg font-black">2</span></td>
                                <td class="py-6 text-right space-x-2">
                                    <button class="p-3 bg-slate-100 rounded-xl text-tinitz-blue hover:bg-tinitz-blue hover:text-white transition-all"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
                                    <button class="p-3 bg-red-100 rounded-xl text-red-600 hover:bg-red-600 hover:text-white transition-all"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                                    <button class="p-3 bg-amber-100 rounded-xl text-amber-600 hover:bg-amber-600 hover:text-white transition-all"><i data-lucide="refresh-cw" class="w-4 h-4"></i></button>
                                </td>
                            </tr>
                            <tr class="hover:bg-slate-50 transition-colors">
                                <td class="py-6 font-black text-tinitz-blue uppercase italic">ONG</td>
                                <td class="py-6 opacity-40 italic">Impact Social & Humanitaire</td>
                                <td class="py-6"><span class="px-3 py-1 bg-tinitz-blue text-white rounded-lg font-black">4</span></td>
                                <td class="py-6 text-right space-x-2">
                                    <button class="p-3 bg-slate-100 rounded-xl text-tinitz-blue transition-all"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
                                    <button class="p-3 bg-red-100 rounded-xl text-red-600 transition-all"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                                    <button class="p-3 bg-amber-100 rounded-xl text-amber-600 transition-all"><i data-lucide="refresh-cw" class="w-4 h-4"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,

    // 2. FORM VIEW - CATEGORY & CANDIDATES (Capture 22.25.22.png)
    form: `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-5xl mx-auto">
                <div class="flex items-center gap-6 mb-12 border-b border-slate-100 pb-12">
                    <button onclick="app.router.goTo('vote-list')" class="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-tinitz-red transition-all shadow-sm"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                    <div>
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">Créer une catégorie</h2>
                        <p class="label-bold-caps mt-2">CONFIGURATION DES CANDIDATURES ET DU SCRUTIN</p>
                    </div>
                </div>

                <div class="space-y-10">
                    <!-- Global Config -->
                    <div class="card-premium p-10 bg-white">
                        <h4 class="text-xs font-black text-tinitz-blue uppercase tracking-widest italic mb-8">Informations de Catégorie</h4>
                        <div class="grid md:grid-cols-2 gap-8">
                             <div class="space-y-2">
                                <label class="label-bold-caps text-[9px]">Événement *</label>
                                <select class="w-full bg-slate-50 border-slate-200 rounded-2xl p-4 text-xs font-bold focus:ring-tinitz-red transition-all"><option>Prix National d'Excellence</option></select>
                            </div>
                            <div class="space-y-2">
                                <label class="label-bold-caps text-[9px]">Nom de la Catégorie *</label>
                                <input type="text" placeholder="Ex: Innovation Techno" class="w-full bg-slate-50 border-slate-200 rounded-2xl p-4 text-xs font-bold transition-all placeholder:opacity-30">
                            </div>
                        </div>
                    </div>

                    <!-- Candidates List (Dynamic) -->
                    <div class="space-y-6">
                        <div class="flex items-center justify-between">
                             <h4 class="text-xs font-black text-tinitz-blue uppercase tracking-widest italic"><i data-lucide="users" class="w-4 h-4 inline mr-2 text-tinitz-red"></i> Candidats Associés</h4>
                             <button class="px-6 py-2 bg-slate-900 text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl shadow-slate-900/20 active:scale-95 transition-all">+ Ajouter un candidat</button>
                        </div>

                        <!-- Candidate Entry -->
                        <div class="card-premium p-8 bg-slate-50 border-dashed border-2 border-slate-300 relative group transition-all hover:bg-white hover:border-slate-200">
                            <div class="absolute -top-3 -right-3">
                                <button class="w-8 h-8 bg-red-500 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-90 transition-all opacity-0 group-hover:opacity-100"><i data-lucide="x" class="w-4 h-4"></i></button>
                            </div>
                            <div class="grid md:grid-cols-3 gap-6">
                                <div class="space-y-2">
                                    <label class="label-bold-caps text-[8px]">Nom du candidat *</label>
                                    <input type="text" placeholder="Prénom & NOM" class="w-full bg-white border-slate-100 rounded-xl p-3 text-[11px] font-bold">
                                </div>
                                <div class="space-y-2">
                                    <label class="label-bold-caps text-[8px]">Image candidate *</label>
                                    <div class="flex gap-2">
                                        <input type="file" id="candidat-img" class="hidden">
                                        <label for="candidat-img" class="flex-1 bg-white border border-slate-200 rounded-xl p-3 text-[9px] font-black uppercase tracking-widest cursor-pointer hover:bg-slate-50 transition-all flex items-center gap-2">
                                            <i data-lucide="upload-cloud" class="w-3 h-3"></i> Choisir un fichier
                                        </label>
                                    </div>
                                </div>
                                <div class="space-y-2">
                                    <label class="label-bold-caps text-[8px]">Description</label>
                                    <input type="text" placeholder="Vision / Motivation" class="w-full bg-white border-slate-100 rounded-xl p-3 text-[11px] font-bold">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pt-8">
                         <button class="w-full stats-card-blue py-6 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-premium active:scale-95 transition-all">Enregistrer la Configuration</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 3. STATS VIEW (Capture 22.26.15.png)
    stats: `
        <div class="view-enter p-12 custom-scrollbar">
            <div class="max-w-7xl mx-auto space-y-12">
                 <div class="flex items-center gap-6 mb-12 border-b border-slate-100 pb-12">
                    <button onclick="app.router.goTo('vote-list')" class="p-3 bg-white border border-slate-200 rounded-xl text-slate-400 hover:text-tinitz-red transition-all shadow-sm"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                    <div class="flex-1">
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-none text-right">Statistiques des Votes</h2>
                        <p class="label-bold-caps mt-2 text-right">ANALYSE TEMPS RÉEL DE L'ENGAGEMENT DES PARTICIPANTS</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="card-premium p-8 stats-card-orange text-white shadow-tinitz-red/30">
                        <div class="flex justify-between items-start mb-6">
                            <i data-lucide="users" class="w-8 h-8 opacity-40"></i>
                            <span class="px-3 py-1 bg-white/20 rounded-full text-[8px] font-black uppercase">Live</span>
                        </div>
                        <p class="text-4xl font-black mb-1">1,240</p>
                        <p class="label-bold-caps text-white/60">Participants Votants</p>
                    </div>
                    <div class="card-premium p-8 stats-card-blue text-white shadow-tinitz-blue/30">
                        <i data-lucide="award" class="w-8 h-8 opacity-40 mb-6"></i>
                        <p class="text-4xl font-black mb-1">6</p>
                        <p class="label-bold-caps text-white/60">Candidats</p>
                    </div>
                    <div class="card-premium p-8 bg-slate-950 text-white shadow-2xl">
                        <i data-lucide="layers" class="w-8 h-8 opacity-40 mb-6"></i>
                        <p class="text-4xl font-black mb-1">2</p>
                        <p class="label-bold-caps text-white/60">Catégories</p>
                    </div>
                </div>

                <div class="card-premium p-12 bg-white">
                    <div class="flex justify-between items-center mb-12">
                         <h4 class="text-sm font-black text-tinitz-blue uppercase tracking-widest italic">Histogramme des Votes par Candidat</h4>
                         <span class="text-[9px] font-black uppercase tracking-widest text-slate-300 italic">Période actuelle: Rencontre Leaders</span>
                    </div>

                    <!-- Chart Simulation -->
                    <div class="h-96 w-full flex items-end justify-around gap-10 px-10 pb-10 border-b border-slate-100 relative">
                        <div class="absolute left-0 top-0 h-full w-px bg-slate-50 flex flex-col justify-between text-[8px] font-bold text-slate-200 uppercase py-2">
                            <span>2,0</span><span>1,8</span><span>1,6</span><span>1,4</span><span>1,2</span><span>1,0</span><span>0,8</span><span>0,6</span><span>0,4</span><span>0,2</span>
                        </div>
                        
                        <div class="flex-1 flex flex-col items-center gap-4 group">
                            <div class="w-full bg-pink-400 rounded-2xl transform origin-bottom transition-all duration-1000 group-hover:brightness-110 shadow-lg shadow-pink-100" style="height: 100%"></div>
                            <div class="text-center">
                                <p class="text-[10px] font-black text-slate-900 uppercase italic">Techno-Team A</p>
                                <p class="text-[9px] font-black text-pink-500 mt-1">2,0 Votes</p>
                            </div>
                        </div>

                         <div class="flex-1 flex flex-col items-center gap-4 group">
                            <div class="w-full bg-sky-400 rounded-2xl transform origin-bottom transition-all duration-1000 group-hover:brightness-110 shadow-lg shadow-sky-100" style="height: 100%"></div>
                            <div class="text-center">
                                <p class="text-[10px] font-black text-slate-900 uppercase italic">Social Impact</p>
                                <p class="text-[9px] font-black text-sky-500 mt-1">2,0 Votes</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-12">
                         <p class="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] italic">Distribution proportionnelle de l'audience</p>
                    </div>
                </div>
            </div>
        </div>
    `
};
