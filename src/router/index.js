import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import AdminLayout from '../views/AdminLayout.vue'
import DashboardHome from '../views/admin/DashboardHome.vue'
import EventsView from '../views/admin/EventsView.vue'
import SubscriptionView from '../views/admin/SubscriptionView.vue'
import InvoicesView from '../views/admin/InvoicesView.vue'
import EventAdminLayout from '../views/admin/EventAdminLayout.vue'
import DummyEventView from '../views/admin/DummyEventView.vue'

// Import Event Panel Views
import EventDashboard from '../views/admin/event/DashboardView.vue'
import EventDevices from '../views/admin/event/DevicesView.vue'
import EventTicketing from '../views/admin/event/TicketingView.vue'
import EventVotes from '../views/admin/event/VotesView.vue'
import EventCampaigns from '../views/admin/event/CampaignsView.vue'
import EventForms from '../views/admin/event/RegistrationFormsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'admin-dashboard', component: DashboardHome },
      { path: 'events', name: 'admin-events', component: EventsView },
      { path: 'subscription', name: 'admin-subscription', component: SubscriptionView },
      { path: 'invoices', name: 'admin-invoices', component: InvoicesView }
    ]
  },
  {
    path: '/admin/event/:id',
    component: EventAdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'admin-event-dashboard', component: EventDashboard },
      { path: 'devices', name: 'admin-event-devices', component: EventDevices },
      { path: 'directions', name: 'admin-event-directions', component: DummyEventView },
      { path: 'sites', name: 'admin-event-sites', component: DummyEventView },
      { path: 'alerts', name: 'admin-event-alerts', component: DummyEventView },
      { path: 'articles', name: 'admin-event-articles', component: DummyEventView },
      { path: 'slides', name: 'admin-event-slides', component: DummyEventView },
      { path: 'campaigns', name: 'admin-event-campaigns', component: EventCampaigns },
      { path: 'votes', name: 'admin-event-votes', component: EventVotes },
      { path: 'forms', name: 'admin-event-forms', component: EventForms },
      { path: 'ticketing', name: 'admin-event-ticketing', component: EventTicketing },
      { path: 'stats', name: 'admin-event-stats', component: DummyEventView }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('tinitz_user_authenticated') === 'true'
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
