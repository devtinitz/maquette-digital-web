const app = {
    state: {
        currentView: 'home',
        selectedEvent: null,
        user: { name: 'DirectionTest', role: 'Admin Elite' }
    },

    router: {
        goTo(viewId, params = null) {
            console.log(`[Elite Router] Navigating to: ${viewId} with params:`, params);
            app.state.currentView = viewId;
            if (params) app.state.selectedEvent = params;

            // Update UI
            const root = document.getElementById('view-root');
            root.innerHTML = ''; // Clear for transition

            let viewHtml = '';
            switch (viewId) {
                case 'home': viewHtml = COMPONENTS.home; break;
                case 'event-hub': viewHtml = COMPONENTS.eventHub(params || 'Événement'); break;
                case 'billing': viewHtml = COMPONENTS.billing; break;
                case 'plans': viewHtml = COMPONENTS.plans; break;
                case 'vote-list': viewHtml = VOTE_COMPONENTS.list; break;
                case 'vote-form': viewHtml = VOTE_COMPONENTS.form; break;
                case 'vote-stats': viewHtml = VOTE_COMPONENTS.stats; break;
                case 'crm': viewHtml = `
                    <div class="view-enter p-12 text-center py-40">
                        <div class="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-emerald-500/10">
                            <i data-lucide="users" class="w-12 h-12"></i>
                        </div>
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic">CRM Participant Elite</h2>
                        <p class="label-bold-caps mt-4">Module de segmentation et suivi live en cours de déploiement</p>
                        <button onclick="app.router.goTo('event-hub', app.state.selectedEvent)" class="mt-12 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">Retour au Hub</button>
                    </div>
                `; break;
                case 'ads': viewHtml = `
                    <div class="view-enter p-12 text-center py-40">
                        <div class="w-24 h-24 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-amber-500/10">
                            <i data-lucide="zap" class="w-12 h-12"></i>
                        </div>
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic">Régie Publicitaire</h2>
                        <p class="label-bold-caps mt-4">Module de monétisation et bannières sponsors Elite</p>
                        <button onclick="app.router.goTo('event-hub', app.state.selectedEvent)" class="mt-12 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">Retour au Hub</button>
                    </div>
                `; break;
                case 'cms': viewHtml = `
                    <div class="view-enter p-12 text-center py-40">
                        <i data-lucide="layers" class="w-20 h-20 text-slate-200 mx-auto mb-10"></i>
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic">CMS & Digital Signage</h2>
                        <p class="label-bold-caps mt-4">Module de gestion de contenu en cours de déploiement Elite</p>
                        <button onclick="app.router.goTo('event-hub', app.state.selectedEvent)" class="mt-12 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">Retour au Hub</button>
                    </div>
                `; break;
                case 'bornes': viewHtml = `
                    <div class="view-enter p-12 text-center py-40">
                        <i data-lucide="monitor" class="w-20 h-20 text-slate-200 mx-auto mb-10"></i>
                        <h2 class="text-4xl font-black text-slate-900 uppercase italic">Hardware & Connectivité</h2>
                        <p class="label-bold-caps mt-4">Monitoring du parc de bornes TDISPLAY / TTQ</p>
                        <button onclick="app.router.goTo('event-hub', app.state.selectedEvent)" class="mt-12 px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition-all">Retour au Hub</button>
                    </div>
                `; break;
            }

            root.innerHTML = viewHtml;
            
            // Re-init Icons
            lucide.createIcons();
            
            // Reset Scroll
            document.getElementById('main-scroll-root').scrollTop = 0;

            // Update Navbar Active State
            app.router.updateNav();
        },

        updateNav() {
            // Update Sidebar buttons state
            document.querySelectorAll('[data-sb]').forEach(btn => {
                btn.classList.remove('bg-red-50', 'text-tinitz-red', 'shadow-sm');
                btn.classList.add('text-slate-500');
            });

            const current = app.state.currentView;
            let targetId = 'home';
            if(current === 'billing') targetId = 'billing';
            if(current === 'plans') targetId = 'plans';
            if(current === 'bornes') targetId = 'bornes';
            if(current === 'cms') targetId = 'cms';
            if(current === 'ads') targetId = 'ads';
            if(current === 'crm') targetId = 'crm';
            if(current.startsWith('vote')) targetId = 'vote';

            const activeBtn = document.querySelector(`[data-sb="${targetId}"]`);
            if(activeBtn) {
                activeBtn.classList.add('bg-red-50', 'text-tinitz-red', 'shadow-sm');
                activeBtn.classList.remove('text-slate-500');
            }
        }
    },

    init() {
        console.log("[Elite Admin] Init Application with Sidebar...");
        const container = document.getElementById('admin-container');
        
        // Build Structured Shell
        container.innerHTML = `
            ${COMPONENTS.navbar}
            <div class="flex flex-1 overflow-hidden h-[calc(100vh-6rem)]">
                ${COMPONENTS.sidebar}
                <main id="main-scroll-root" class="flex-1 overflow-y-auto bg-slate-50 relative custom-scrollbar">
                    <div id="view-root"></div>
                </main>
            </div>
        `;

        this.router.goTo('home');
        lucide.createIcons();
    }
};

// Global Helper for UI Dropdowns
function toggleUserDropdown() {
    console.log("Toggle Direction Menu...");
}

document.addEventListener('DOMContentLoaded', () => app.init());
