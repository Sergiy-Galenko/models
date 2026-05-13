from django.contrib import admin
from .models import Category, Tag, Item, Collection, Gallery


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    search_fields = ['name']


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'price', 'created_at']
    search_fields = ['title', 'description']
    list_filter = ['category', 'tags']


@admin.register(Collection)
class CollectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug']
    search_fields = ['title']


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ['item', 'order']
    list_filter = ['item']