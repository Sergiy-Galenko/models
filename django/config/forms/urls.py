from django.urls import path
from .views import ContactRequestView, NewsletterSubscribeView

urlpatterns = [
    path('contact/', ContactRequestView.as_view(), name='contact'),
    path('newsletter/', NewsletterSubscribeView.as_view(), name='newsletter'),
]