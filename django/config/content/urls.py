from django.urls import path
from .views import StaticPageDetailView, HomeSectionListView, SeoMetaDetailView

urlpatterns = [
    path('pages/<slug:slug>/', StaticPageDetailView.as_view(), name='static-page'),
    path('home-sections/', HomeSectionListView.as_view(), name='home-sections'),
    path('seo/<str:page>/', SeoMetaDetailView.as_view(), name='seo-meta'),
]