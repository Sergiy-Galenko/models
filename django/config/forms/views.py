from rest_framework import generics, permissions
from .models import ContactRequest, NewsletterSubscriber
from .serializers import ContactRequestSerializer, NewsletterSubscriberSerializer


class ContactRequestView(generics.CreateAPIView):
    queryset = ContactRequest.objects.all()
    serializer_class = ContactRequestSerializer
    permission_classes = [permissions.AllowAny]


class NewsletterSubscribeView(generics.CreateAPIView):
    queryset = NewsletterSubscriber.objects.all()
    serializer_class = NewsletterSubscriberSerializer
    permission_classes = [permissions.AllowAny]