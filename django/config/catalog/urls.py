from django.urls import path
from .views import (
    CategoryListView,
    TagListView,
    ItemListView,
    ItemDetailView,
    CollectionListView,
    CollectionDetailView,
)

urlpatterns = [
    path('categories/', CategoryListView.as_view(), name='category-list'),
    path('tags/', TagListView.as_view(), name='tag-list'),
    path('items/', ItemListView.as_view(), name='item-list'),
    path('items/<slug:slug>/', ItemDetailView.as_view(), name='item-detail'),
    path('collections/', CollectionListView.as_view(), name='collection-list'),
    path('collections/<slug:slug>/', CollectionDetailView.as_view(), name='collection-detail'),
]