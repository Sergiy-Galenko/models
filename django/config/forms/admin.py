from django.contrib import admin
from .models import ContactRequest, NewsletterSubscriber


@admin.register(ContactRequest)
class ContactRequestAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at', 'is_read']
    list_filter = ['is_read']
    search_fields = ['name', 'email']


@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ['email', 'created_at', 'is_active']
    list_filter = ['is_active']
    search_fields = ['email']