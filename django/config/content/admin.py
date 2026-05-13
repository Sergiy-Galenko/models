from django.contrib import admin
from .models import StaticPage, HomeSection, SeoMeta


@admin.register(StaticPage)
class StaticPageAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'updated_at']
    search_fields = ['title']


@admin.register(HomeSection)
class HomeSectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']
    ordering = ['order']


@admin.register(SeoMeta)
class SeoMetaAdmin(admin.ModelAdmin):
    list_display = ['page', 'title']
    search_fields = ['page', 'title']